import axios from 'axios';

const getCompanies = async () => {
  const response = await axios.get('http://localhost:5000/companies');
  return response.data;
};

const getCompany = async (id: string) => {
  const response = await axios.get(`http://localhost:5000/companies/${id}`);
  return response.data;
};

const companyService = { getCompanies, getCompany };

export default companyService;
