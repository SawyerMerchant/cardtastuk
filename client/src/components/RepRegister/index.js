import React from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Jumbotron,
  Panel,
  Image,
  Accordion
} from "react-bootstrap";
import serialize from "form-serialize";
import { withRouter } from "react-router-dom";

const handleSubmit = async (e, history) => {
  e.preventDefault();
  const form = e.target;
  const data = serialize(form, { hash: true });

  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password
    })
  };

  try {
    let response = await fetch("/api/v1/reps", config);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    let url = window.location.origin;
    window.location.replace(`${url}/admin/login`);
  } catch (error) {
    console.log(error);
  }
};

const howItWorks = (
  <h3>How it Works</h3>
);

const whoShouldRegister = (
  <h3>Who Should Register</h3>
)

const frequentlyAskedQuestions = (
  <h3>Frequently Asked Questions</h3>
)

const RepRegister = ({ history }) => {
  return (
    <Grid>
      <Jumbotron>
        <h2>CardTastuk Affiliate Program</h2>
          <p>A no hassle way to make money while helping schools, clubs, and organizations.</p>
      </Jumbotron>

      <Panel header={howItWorks}>
        Register as an affiliate by completing the form below, then login to invite organization leaders. Organization leaders and their members can then use their own link to invite people they know to use CardTastuk. When someone uses one of your organization's links to sign up and send holiday cards, you earn a commission.
      </Panel>

      <Panel header={whoShouldRegister}>
        The affiliate program is best for marketing professionals who already know many organization leaders and small business owners or those willing to network to create relationships with such leaders.
      </Panel>

      <Panel header={frequentlyAskedQuestions}>
        <Accordion>
          <Panel header="How Much Can I Make?" eventKey="1">
            <p>CardTastuk will pay a commission for every card purchased through your referral links and the referral links of the organizations you sign up. Small sales are easy to rack up by sharing your link through social media. Big sales can be made if you and your members can sell to small businesses such as real estate agents, insurance agents, or car dealerships. Below is a hypothetical example of how much could be made by an affiliate that signs up 5 groups with 20 members each where each member makes 25 small sales and 2 large sales:</p>
            <Image src="/rephowmuchgroups.png" responsive rounded />
            <p>Alternatively, if an affiliate focused on making sales to small businesses instead of signing up organizations, here is a hypothetical example of how much could be made by selling to 25 small businesses directly:</p>
            <Image src="/rephowmuchsolo.png" responsive rounded />
            <p>As you can see, even though a higher commission is paid per card for direct sales, more money can be made in less time by signing up organizations and making sure they are motivated to sell.</p>
            <p>You should know that 350 is a conservative amount for a sale to a small business. Sales of 5 to 10 thousand are not uncommon.</p>
          </Panel>
          <Panel header="Are Big Sales Hard to Make?" eventKey="2">
            <p>Nope. Many small business already send cards at the end of the year and our prices are competitive. We'll also provide tips your members can use to make big sales.</p>
          </Panel>
          <Panel header="How do I Get Paid?" eventKey="3">
            <p>CardTastuk uses <a target="_blank" rel="noopener noreferrer" href="https://stripe.com/connect/use-cases">Stripe Connect</a> to transmit payments. Other platforms that use Stripe Connect include: Lyft, Shopify, Squarespace, WooCommerce, and Kickstarter. After your first sale, you’ll be prompted to provide the required information needed to transmit payment including tax information, date of birth, and the bank account into which payment should be deposited. In the case of large payments, documentational proof of identity such as a photo id may be required.</p>
          </Panel>
          <Panel header="When do I Get Paid?" eventKey="4">
            <p>CardTastuk is a seasonal fundraiser. It would not make sense to send or receive a holiday card in June or July. For that reason, most organizations choose to run their fundraiser sometime in the fall. Any orders place before October 31st will be processed the first week of November for delivery in the second week of November. Orders placed after the first of November take 10 days to process before being mailed. The last orders of the year must be placed by December 7th.</p>
            <p>After your first sale, you will be prompted to provide information necessary to transmit payment. Commission payments are processed and transmitted the first week of January.</p>
          </Panel>
          <Panel header="I Know Someone Who Is the President of Their High School Club, Can I Sign Them Up as an Organization Leader?" eventKey="5">
            <p>It depends. Are they able to make any decision on behalf of their group or is there someone from whom they sometimes need to get permission? The person granting permission might be the Leader that needs to sign up if they are the keeper of the organization’s email address and banking information.</p>
            <p>As an example, a high school club will often have a Chapter President (an elected student member) and a Chapter Advisor (a teacher who oversees the club). In most cases, the Chapter Advisor is the Leader who should sign up.</p>
          </Panel>
          <Panel header="What Are We Selling?" eventKey="6">
            <p>Customers you refer to CardTastuk are able able to pick out holiday cards, customize the greeting, use a touch screen to add a signature, upload a list of recipients, then we’ll print the cards, put them in envelopes and send them to the list of recipients. For people or small business who have a lot of cards to send, it can be a big time and money saver.</p>
          </Panel>
          <Panel header="Can We Sell to Anyone?" eventKey="7">
            <p>Anyone in the United States.</p>
          </Panel>
          <Panel header="What Happens Next Year?" eventKey="8">
            <p>Any customers or organizations you sign up this year are yours. If they come back next year and the year afterwards, you continue to earn commissions.</p>
          </Panel>
          <Panel header="Can I Track My My Sales?" eventKey="9">
            <p>An organization member can see their own sales, a Leader can see the sales of all members in their organization. An affiliate can see their own sales and the sales of each of their organizations.</p>
          </Panel>
          <Panel header="How Are My Commissions Taxed?" eventKey="10">
            <p>Commissions are 1099 income. Consult a tax professional for the implications.</p>
          </Panel>
          <Panel header="How do I Get Started?" eventKey="11">
            <ul>
              <li>Complete the form below.</li>
              <li>Confirm your email address.</li>
              <li>Log in to your account.</li>
              <li>Add your organization leader’s names and email address that you already know.</li>
              <li>Let your organization contacts know to check their email for the CardTastuk invitation and let them know how CardTastuk works.</li>
              <li>Network and attend <a target="_blank" rel="noopener noreferrer" href="https://www.meetup.com/">Meetups</a> to find additional organization leaders in your area to invite.</li>
              <li>Check back to see which organization leaders have accepted their invitation, shared links, and made sales.</li>
              <li>Keep in contact with the organizations you sign up to keep them motivated and answer any questions they might have.</li>
            </ul>
          </Panel>
        </Accordion>
      </Panel>

      <Row>
        <h1>Sign Up as an Affiliate</h1>
        <Col md={12}>
          <form onSubmit={e => handleSubmit(e, history)}>
            <FormGroup controlId="first_name">
              <ControlLabel>First Name</ControlLabel>
              <FormControl type="text" name="first_name" required />
            </FormGroup>
            <FormGroup controlId="last_name">
              <ControlLabel>Last Name</ControlLabel>
              <FormControl type="text" name="last_name" />
            </FormGroup>
            <FormGroup controlId="email">
              <ControlLabel>Email</ControlLabel>
              <FormControl type="email" name="email" required />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" name="password" required />
            </FormGroup>
            <Button type="submit" bsStyle="info">
              Create an Affiliate Account
            </Button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(RepRegister);
