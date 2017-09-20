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
      organization_name: data.organization_name,
      email: data.email,
      password: data.password
    })
  };

  try {
    let response = await fetch("/api/v1/organizations", config);

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

const AdminRegister = ({ history }) => {
  return (
    <Grid>
      <Jumbotron>
        <h2>Fundraising with CardTastuk</h2>
          <p>A no hassle way to generate money for your school, club, or organization.</p>
      </Jumbotron>

      <Panel header={howItWorks}>
        Register your organization by completing the form below, then login to invite each member of the organization. Members can then use their own link to invite people they know to use CardTastuk. When someone uses one of your organization's links to sign up and send holiday cards, your organization earns a commission.
      </Panel>

      <Panel header={whoShouldRegister}>
        The organization's Leader should use the form below to register the new organization. The Leader must be someone with knowledge of the organization's official information (formation date, address, banking information) and have the authority to make decisions on behalf of the group.
      </Panel>

      <Panel header={frequentlyAskedQuestions}>
        <Accordion>
          <Panel header="How Much Can We Make?" eventKey="1">
            <p>CardTastuk will pay a commission for every card purchased through your referral links. Small sales are easy to rack up by sharing your link through social media. Big sales can be made if your members can sell to a small business such as a real estate agent, insurance agent, or car dealership. Below is a hypothetical example of how much can be made by a group with 20 members that each make 25 small sales and 2 large sales:</p>
            <Image src="/orghowmuch.png" responsive rounded />
          </Panel>
          <Panel header="Are Big Sales Hard to Make?" eventKey="2">
            <p>Nope. Many small business already send cards at the end of the year and our prices are competitive. We'll also provide tips your members can use to make big sales.</p>
          </Panel>
          <Panel header="How do We Get Paid?" eventKey="3">
            <p>CardTastuk uses <a target="_blank" rel="noopener noreferrer" href="https://stripe.com/connect/use-cases">Stripe Connect</a> to transmit payments. Other platforms that use Stripe Connect include: Lyft, Shopify, Squarespace, WooCommerce, and Kickstarter. After an organization’s first sale, the Leader is prompted to provide the required information needed to transmit payment including the organization’s type, name, founding date, phone number and the bank account into which payment should be deposited. In the case of large payments, documentation of the organization’s founding may be required.</p>
          </Panel>
          <Panel header="When do We Get Paid?" eventKey="4">
            <p>CardTastuk is a seasonal fundraiser. It would not make sense to send or receive a holiday card in June or July. For that reason, most organizations choose to run their fundraiser sometime in the fall. Any orders place before October 31st will be processed the first week of November for delivery in the second week of November. Orders placed after the first of November take 10 days to process before being mailed. The last orders of the year must be placed by December 7th.</p>
            <p>After your organization makes its first sale, your Leader will be prompted to provide information necessary to transmit payment. Commission payments are processed and transmitted the first week of January.</p>
          </Panel>
          <Panel header="I Was Elected President of My Club, am I the Leader?" eventKey="5">
            <p>It depends. Are you able to make any decision on behalf of your group or is there someone from whom you sometimes need to get permission? The person granting permission might be the Leader that needs to sign up below if they are the keeper of the organization’s email address and banking information.</p>
            <p>As an example, a high school club will often have a Chapter President (an elected student member) and a Chapter Advisor (a teacher who oversees the club). In most cases, the Chapter Advisor is the Leader who should complete the form below.</p>
          </Panel>
          <Panel header="What Are We Selling?" eventKey="6">
            <p>Customers you refer to CardTastuk are able able to pick out holiday cards, customize the greeting, use a touch screen to add a signature, upload a list of recipients, then we’ll print the cards, put them in envelopes and send them to the list of recipients. For people or small business who have a lot of cards to send, it can be a big time and money saver.</p>
          </Panel>
          <Panel header="Can We Sell to Anyone?" eventKey="7">
            <p>Anyone in the United States.</p>
          </Panel>
          <Panel header="What Happens Next Year?" eventKey="8">
            <p>Any customers you sign up this year are your customers. If they come back next year and the year afterwards, your organization continues to earn commissions.</p>
          </Panel>
          <Panel header="Can I Track My My Sales?" eventKey="9">
            <p>An organization member can see their own sales and a Leader can see the sales of all members in their organization.</p>
          </Panel>
          <Panel header="How Should We Spend the Money We Make?" eventKey="10">
            <p>That’s really up to you, but because we allow you to track how much was generated by each member, may we suggest that you devise a percentage split to help the organization cover its costs and allow member to cover their costs related to the organization. Such arrangements seem to best motivate group members.</p>
            <p>For example, a soccer club may have association and tournament fees each year, and each player is responsible for the cost of his or her uniform. This group might decide on an 80/20 player/team split where 80% of a member’s commissions go towards the cost of their uniform and 20% goes into the team pool to cover shared expenses.</p>
          </Panel>
          <Panel header="How do I Get Started?" eventKey="11">
            <ul>
              <li>Complete the form below.</li>
              <li>Confirm your email address.</li>
              <li>Log in to your account.</li>
              <li>Add your organization member’s names and email address.</li>
              <li>Let your members know to check their email for the CardTastuk invitation and let them know how making sales will benefit them.</li>
              <li>Encourage your members to share their referral link via social media and to watch the short How To videos on selling to small businesses.</li>
              <li>Check back to see which members have accepted their invitation, shared links, and made sales.</li>
            </ul>
          </Panel>
        </Accordion>
      </Panel>

      <Row>
        <h1>Sign Up an Organization</h1>
        <Col md={12}>
          <form onSubmit={e => handleSubmit(e, history)}>
            <FormGroup controlId="first_name">
              <ControlLabel>Leader First Name</ControlLabel>
              <FormControl type="text" name="first_name" required />
            </FormGroup>
            <FormGroup controlId="last_name">
              <ControlLabel>Leader Last Name</ControlLabel>
              <FormControl type="text" name="last_name" />
            </FormGroup>
            <FormGroup controlId="organization_name">
              <ControlLabel>Organization Name</ControlLabel>
              <FormControl type="text" name="organization_name" required />
            </FormGroup>
            <FormGroup controlId="email">
              <ControlLabel>Leader Email</ControlLabel>
              <FormControl type="email" name="email" required />
            </FormGroup>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" name="password" required />
            </FormGroup>
            <Button type="submit" bsStyle="info">
              Create an Organization Account
            </Button>
          </form>
        </Col>
      </Row>
    </Grid>
  );
};

export default withRouter(AdminRegister);
