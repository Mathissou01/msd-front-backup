import { format, getDay, parse, startOfWeek } from "date-fns";
import { fr } from "date-fns/locale";
import {
  Calendar,
  CalendarProps,
  dateFnsLocalizer,
  Event,
  EventPropGetter,
} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import React, { ComponentType, useCallback, useEffect, useState } from "react";
import { GetStaticProps } from "next";
import { fetchGraphQLApi, getPages } from "../lib/api";
import Header from "../components/header";
import pageStyles from "../styles/page.module.scss";
import styles from "../styles/agenda.module.scss";

const locales = {
  fr: fr,
};
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const NoDnDCalendar = Calendar as ComponentType<CalendarProps<ICalendarEvent>>;

interface IEvent {
  // id: number;
  attributes: {
    title: string;
    description?: string;
    allDay?: boolean;
    start?: string;
    end?: string;
  };
}

// interface ITimeEvent extends IEvent {}

interface ICalendarEvent extends Event {
  id: number;
  type: string;
  title: string;
  description?: string;
  allDay?: boolean;
  start?: Date;
  end?: Date;
  resource?: any;
}

type AgendaProps = {
  pages?: any;
  timeEvents: Array<IEvent>;
  timeSlots: Array<IEvent>;
  timeDays: Array<IEvent>;
};

export default function Agenda({
  pages,
  timeEvents,
  timeSlots,
  timeDays,
}: AgendaProps) {
  let i = 0;
  const [events] = useState<ICalendarEvent[]>([
    ...timeEvents.map((event) => {
      return {
        id: i++,
        type: "event",
        title: event.attributes.title,
        description: event.attributes.description,
        allDay: event.attributes.allDay,
        start: event.attributes.start
          ? new Date(event.attributes.start)
          : undefined,
        end: event.attributes.end ? new Date(event.attributes.end) : undefined,
      };
    }),
    ...timeSlots.map((event) => {
      return {
        id: i++,
        type: "slot",
        title: event.attributes.title,
        description: event.attributes.description,
        allDay: event.attributes.allDay,
        start: event.attributes.start
          ? new Date(event.attributes.start)
          : undefined,
        end: event.attributes.end ? new Date(event.attributes.end) : undefined,
      };
    }),
    ...timeDays.map((event) => {
      return {
        id: i++,
        type: "day",
        title: event.attributes.title,
        description: event.attributes.description,
        allDay: event.attributes.allDay,
        start: event.attributes.start
          ? new Date(event.attributes.start)
          : undefined,
        end: event.attributes.end ? new Date(event.attributes.end) : undefined,
      };
    }),
  ]);

  useEffect(() => {
    console.log("useEffect", events);
  }, [events]);

  const eventPropGetter = useCallback<EventPropGetter<ICalendarEvent>>(
    (event, start, end, isSelected) => ({
      ...(isSelected && {
        style: {
          backgroundColor: "#000",
        },
      }),
      ...(event.type && {
        className: styles[`agenda__type-${event.type}`],
      }),
    }),
    [],
  );

  return (
    <>
      <Header pages={pages} />
      <main>
        <div className={pageStyles.page__content}>
          <h1>Agenda</h1>
          <NoDnDCalendar
            defaultView="month"
            events={events}
            eventPropGetter={eventPropGetter}
            localizer={localizer}
            popup
            tooltipAccessor={(event: ICalendarEvent) => event.description ?? ""}
            className={styles.agenda__calendar}
          />
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pages = await getPages(context.preview);
  const timeEvents = await fetchGraphQLApi({
    query: `
    query GetTimeEvents {
      timeEvents {
        data {
          id
          attributes {
            title
            description
            allDay
            start
            end
            createdAt,
            publishedAt
          }
        }
      }
    }
  `,
  });
  const timeSlots = await fetchGraphQLApi({
    query: `
    query GetTimeSlots {
      timeSlots {
        data {
          id
          attributes {
            title
            description
            allDay
            start
            end
            createdAt,
            publishedAt
          }
        }
      }
    }
  `,
  });
  const timeDays = await fetchGraphQLApi({
    query: `
    query GetTimeDays {
      timeDays {
        data {
          id
          attributes {
            title
            description
            allDay
            start
            end
            createdAt,
            publishedAt
          }
        }
      }
    }
  `,
  });

  return {
    props: {
      pages: pages,
      timeEvents: timeEvents?.data?.timeEvents?.data,
      timeSlots: timeSlots?.data?.timeSlots?.data,
      timeDays: timeDays?.data?.timeDays?.data,
    },
    revalidate: 1,
  };
};
