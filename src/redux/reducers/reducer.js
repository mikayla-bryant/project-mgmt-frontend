import {
  CREATE_ORGANIZATION,
  SIGN_UP_SUCCESS,
  FIND_ORGANIZATION_SUCCESS,
  RETRIEVE_USER_INFO,
  LOAD_USERS,
  LOGOUT_SUCCESS,
} from '../actions/actions';

const initialState = {
  clients: [
    {
      clientid: 1,
      name: 'Coffeeroasters',
      city: 'San Francisco',
      state: 'CA',
      zip: '91215',
      country: 'United States of America',
      phoneNumber: '1(888)-345-9304',
      description:
        'This is a mid-sized company that sells various brands of coffee.',
      website: 'www.coffeeroasters.com',
      street: '123 Sunshine St',
    },
    {
      clientid: 2,
      name: 'Citi Bank',
      city: 'Memphis',
      state: 'TN',
      zip: '60734',
      country: 'United States of America',
      phoneNumber: '1(888)-122-4587',
      description: 'null null',
      website: 'citibank.com',
      street: '83 Broadway Blvd',
    },
  ],
  projects: [
    {
      projectid: 1,
      projectname: 'Cofferoasters Website',
      description: 'A landing page for Coffeeroasters',
      client: 'Coffeeroasters',
    },
    {
      projectid: 2,
      projectname: 'Invoice Tracker',
      description: 'Invoice tracker for Citi Bank',
      client: 'Citi Bank',
    },
  ],
  tickets: [
    {
      ticketid: 1,
      subject: 'Broken Social Media Links',
      projectname: 'Coffeeroasters Website',
      priority: 'Standard',
      status: 'In Progress',
      owner: 'Lloyd Castillo',
      assignee: 'Alberta Stewart',
      created: '05/01/21 11:19PM',
    },
    {
      ticketid: 2,
      subject: 'Servers have latency issues',
      projectname: 'Invoice Tracker',
      priority: 'High',
      status: 'Closed',
      owner: 'Lloyd Castillo',
      assignee: 'Johnnie Miles',
      created: '04/14/21 9:53AM',
    },
  ],
  emails: [
    {
      subject: 'Please review your onboarding documents',
      emailtext:
        'Congrats on joining the team! Now for the first steps. Repurposing innovation and then be on brand. Driving audience segments and try to be on brand. Consider thought leadership with a goal to funnel users. Inform above the fold and try to be on brand. Funneling bleeding edge and possibly build ROI. Build brand integration with the aim to gain traction. Demonstrate below the line and finally increase viewability. Consider first party data and possibly think outside the box. Leverage first party data yet improve overall outcomes. Create analytics with a goal to make users into advocates. Engaging a holistic approach while remembering to take this offline. Building first party data and then make users into advocates. Funnel dark social so that we think outside the box. Creating first party data and then be CMSable. Build user engagement to, consequently, innovate. Amplify outside the box thinking to re-target key demographics. Leveraging transformation mapping and above all, go viral. Leading above the fold but increase viewability. Growing dark social with the aim to be CMSable. Take relevant and engaging content to re-target key demographics. Engage sprints to improve overall outcomes. Funneling brand pillars in order to make the logo bigger.',
      sender: 'Lloyd Castillo',
      recipient: 'Johnnie Miles',
    },
    {
      subject: 'How to contact client directly',
      emailtext: 'I am having issues figuring ',
      sender: 'Lloyd Castillo',
      recipient: 'Johnnie Miles',
    },
  ],
  currentUser: {},
  users: [],
  organizationid: '',
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return { ...state, token: action.payload };
    case CREATE_ORGANIZATION:
      return { ...state, organizationid: action.payload };
    case FIND_ORGANIZATION_SUCCESS:
      return { ...state, organizationid: action.payload.id };
    case RETRIEVE_USER_INFO:
      return { ...state, currentUser: action.payload };
    case LOAD_USERS:
      return { ...state, users: action.payload };

    case LOGOUT_SUCCESS:
      return { ...state, currentUser: {} };

    default:
      return state;
  }
}

export default reducer;
