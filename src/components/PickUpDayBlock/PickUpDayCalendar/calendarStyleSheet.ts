import { StyleSheet, Font } from "@react-pdf/renderer";
import dinProBold from "../../../../public/fonts/DINPro-Bold.ttf";
import dinProRegular from "../../../../public/fonts/DINPro-Regular.ttf";

Font.register({
  family: "DINPro-Bold",
  src: dinProBold,
});

Font.register({
  family: "DINPro-Regular",
  src: dinProRegular,
});

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 15,
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: "#faf8f4",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  logoCommunity: {
    width: 156,
    height: 56,
    alignSelf: "flex-start",
  },
  address: {
    fontWeight: 500,
    fontSize: 14,
    textAlign: "center",
    marginBottom: "0.5cm",
  },
  pickUpDayItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 7.5,
    border: "0.75pt solid #E6E6E6",
    boxShadow:
      "0 0 0.75pt rgb(17 95 251 / 5%), 0 0.75pt 1.5pt rgb(17 95 251 / 10%)",
  },
  pictoBloc: {
    display: "flex",
    flex: 0.25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderTopLeftRadius: 7.5,
    borderBottomLeftRadius: 7.5,
  },
  flowPictoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 37.5,
    height: 37.5,
    borderRadius: 7.5,
  },
  contributedPicto: { width: 20 },
  flowInformation: {
    display: "flex",
    flexBasis: "70%",
    flexDirection: "column",
    paddingLeft: 15,
  },
  pickUpDayName: {
    color: "#030f40",
    fontWeight: 500,
    fontSize: 12,
    fontFamily: "DINPro-Bold",
  },
  flowName: {
    color: "#3d466c",
    fontWeight: 400,
    fontSize: 10,
    fontFamily: "DINPro-Regular",
  },
  informationBlock: {
    display: "flex",
    flex: 0.5,
    flexDirection: "column",
    padding: 15,
    gap: 5,
  },
  calendarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  calendarPictoContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 7.73,
  },
  description: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 7,
  },
  descriptionText: {
    color: "#343a40",
    fontWeight: 800,
    fontSize: 10,
    fontFamily: "DINPro-Bold",
  },
  informationMessageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  informationMessagePicto: {
    width: 27,
    height: 27,
    transform: "translateY(-6pt)",
  },
  informationMessage: {
    paddingTop: 2.25,
    fontSize: 10,
    flex: 1,
    fontFamily: "DINPro-Regular",
  },
  verticalLine: {
    width: 0,
    borderLeft: "1.5pt solid #e9ecef",
  },
  acceptedWasteBlock: {
    display: "flex",
    flex: 0.25,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 15,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: 7.5,
    paddingBottom: 7.5,
    alignItems: "flex-start",
  },
  button: {
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 5,
    display: "flex",
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    border: "1.5 solid #9BCD41",
    borderRadius: 3,
    textDecoration: "none",
    fontFamily: "DINPro-Bold",
  },
  buttonLabel: {
    color: "#343a40",
    fontWeight: 800,
    fontSize: 8,
  },
  content: {
    backgroundColor: "#f2f2f2",
    padding: 7.5,
    marginBottom: "0.5cm",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "1cm",
  },
  footerLogo: {
    width: 156,
    height: 56,
    objectFit: "contain",
  },
});
