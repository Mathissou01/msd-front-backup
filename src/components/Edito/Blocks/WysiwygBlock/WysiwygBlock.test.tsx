import { render } from "@testing-library/react";
import WysiwygBlock from "./WysiwygBlock";

const mock = {
  textEditor: `<h3>Headline 3</h3>
<p><strong>Adipiscing molestie non ac eget convallis ullamcorper. Orci eu sed dui aliquam non enim. Lobortis velit duis elementum tellus lectus risus gravida in gravida.</strong></p>
<p>Nec laoreet iaculis pulvinar tempor augue quis. Nec varius gravida cras leo orci aliquam et mi. Amet sed sapien consequat ut semper diam non. Quisque vitae euismod elit posuere nisi. Amet etiam mollis viverra cum eu diam maecenas elementum amet. <span style="text-decoration: underline;">Fames id porta ultrices sem ut gravida.</span></p>
<p><strong>Viverra feugiat in nunc ac quis facilisi</strong>. Lobortis ornare integer enim dictum sem dolor arcu nec condimentum. Tempor dolor mauris turpis nunc purus quam orci tristique nullam. Amet quisque varius risus quam quis imperdiet maecenas. Sed at venenatis vel in nulla nisi. Morbi parturient vel id sed non a et interdum. <br><a href="http://google.com">Turpis cursus rhoncus vitae hendrerit non posuere risus&nbsp;</a></p>
<h4>Headline 4</h4>
<p>Duis lorem viverra justo fermentum massa. Eleifend lectus nibh elit in habitant laoreet tempus mattis dignissim. Purus nunc habitant arcu id. Sollicitudin sem nisl morbi mi amet suscipit urna amet facilisis.</p>
<p>Gravida dui phasellus ut in. Felis tempus nunc vulputate diam sed feugiat vulputate tortor. Blandit tristique maecenas sit placerat eu dui magnis convallis. Donec urna morbi tortor pellentesque in suspendisse eu ac. Velit vitae tempus sed nunc facilisi egestas sit ante vitae.&nbsp;</p>
<h4>Headline 5 (but not really)</h4>
<p>Duis lorem viverra justo fermentum massa. Eleifend lectus nibh elit in habitant laoreet tempus mattis dignissim. Purus nunc habitant arcu id. Sollicitudin sem nisl morbi mi amet suscipit urna amet facilisis.</p>
<p>Gravida dui phasellus ut in. Felis tempus nunc vulputate diam sed feugiat vulputate tortor. Blandit tristique maecenas sit placerat eu dui magnis convallis. Donec urna morbi tortor pellentesque in suspendisse eu ac. Velit vitae tempus sed nunc facilisi egestas sit ante vitae.&nbsp;</p>
<p>[SOMETHING HERE]</p>
<p>Duis lorem viverra justo fermentum massa. Eleifend lectus nibh elit in habitant laoreet tempus mattis dignissim. Purus nunc habitant arcu id. Sollicitudin sem nisl morbi mi amet suscipit urna amet facilisis.</p>
<p>Gravida dui phasellus ut in. Felis tempus nunc vulputate diam sed feugiat vulputate tortor. Blandit tristique maecenas sit placerat eu dui magnis convallis. Donec urna morbi tortor pellentesque in suspendisse eu ac. Velit vitae tempus sed nunc facilisi egestas sit ante vitae.</p>
<ul>
<li>Scelerisque fermentum massa tristique varius scelerisque.</li>
<li>Amet eros erat etiam interdum cursus.</li>
<li>Pellentesque molestie diam ac amet sit tristique in nisl.</li>
</ul>
<p>[SOMETHING HERE]</p>
<p>Non blandit a ante justo quam. Erat amet in at commodo facilisi tortor sit commodo metus. Volutpat consectetur semper egestas lectus. Fames arcu purus netus tempus eu. Et arcu odio pretium eget ultrices aliquam dui sollicitudin congue. Cursus nibh diam ullamcorper massa justo purus. Tristique imperdiet morbi velit amet eros tristique nunc sollicitudin.</p>
<p>Aliquam dignissim donec convallis dolor urna ut vulputate quam vehicula. Eget nisl facilisis non viverra dui ornare congue sed eu.</p>
<ol>
<li>Scelerisque fermentum massa tristique varius scelerisque.</li>
<li>Amet eros erat etiam interdum cursus.</li>
<li>Pellentesque molestie diam ac amet sit tristique in nisl.</li>
</ol>
<p>Purus auctor aliquam tincidunt arcu purus sem. Tellus eget nec leo tristique maecenas at. Platea tincidunt blandit dui ut a id sagittis suspendisse at. Elementum viverra ut leo cursus proin aliquam et tincidunt vel. Mi et diam vitae pharetra dui. Risus pellentesque elit dui quam sed nunc. Euismod id aliquam est eu orci ut nulla massa diam. Interdum amet in integer sed facilisi enim nec. Magna nunc neque libero tellus posuere eu senectus. Nulla mauris donec nascetur mauris ac facilisi at eu. Eget suspendisse odio interdum tellus arcu aliquam. Enim sodales in nec nisl ornare viverra habitant lorem facilisis.</p>
<table style="border-collapse: collapse; height: 134.344px; border-width: 1px;" border="1"><colgroup><col style="width: 25.0474%;"><col style="width: 25.0474%;"><col style="width: 25.0474%;"><col style="width: 24.8577%;"></colgroup>
<thead>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px; border-width: 1px;">Netus pretium</td>
<td style="height: 22.3906px; border-width: 1px;">Date</td>
<td style="height: 22.3906px; border-width: 1px;" colspan="2">Merged columns</td>
</tr>
</thead>
<tbody>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px; border-width: 1px;">Sodales et</td>
<td style="height: 22.3906px; border-width: 1px;">07/11/2022</td>
<td style="height: 22.3906px; border-width: 1px;">Molestie in</td>
<td style="height: 22.3906px; border-width: 1px;">Molestie in</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px; border-width: 1px;">Cursus eu</td>
<td style="height: 22.3906px; border-width: 1px;">09/11/2022</td>
<td style="height: 22.3906px; border-width: 1px;">Pellentesque</td>
<td style="height: 22.3906px; border-width: 1px;">Pellentesque</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px; border-width: 1px;">Sodales et</td>
<td style="height: 22.3906px; border-width: 1px;">07/11/2022</td>
<td style="height: 22.3906px; border-width: 1px;">Molestie in</td>
<td style="height: 22.3906px; border-width: 1px;">Molestie in</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px; border-width: 1px;">Cursus eu</td>
<td style="height: 22.3906px; border-width: 1px;">09/11/2022</td>
<td style="height: 22.3906px; border-width: 1px;">Pellentesque</td>
<td style="height: 22.3906px; border-width: 1px;">Pellentesque</td>
</tr>
<tr style="height: 22.3906px;">
<td style="height: 22.3906px; border-width: 1px;">Sodales et</td>
<td style="height: 22.3906px; border-width: 1px;">07/11/2022</td>
<td style="height: 22.3906px; border-width: 1px;">Molestie in</td>
<td style="height: 22.3906px; border-width: 1px;">Molestie in</td>
</tr>
</tbody>
</table>`,
};
describe("Video Block", () => {
  it("renders", () => {
    const { container } = render(<WysiwygBlock textEditor={mock.textEditor} />);
    expect(container).toMatchSnapshot();
  });
});
