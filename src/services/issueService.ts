import axios from 'axios';
import { Issue } from 'types';

const config = {
  headers: {
    Authorization:
      'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJiYWthNzlAZ21haWwuY29tIiwiaWQiOjIsImlhdCI6MTY0NDYxMjQ1Nn0.mXLIT6_DXq8UdHd35N1l4gHEbV3FJ6V7g1LMOCiFnxI',
  },
};

const createIssue = async (issue: Issue) => {
  try {
    const response = await axios.post('api/issues', issue, config);
    return response;
  } catch (e) {
    return { status: 504 };
  }
};

const issueService = { createIssue };

export default issueService;
