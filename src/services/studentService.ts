import axios from 'axios';

const getStudents = async () => {
  const response = await axios.get('http://localhost:5000/students');
  return response.data;
};

const getStudent = async (id: string) => {
  const response = await axios.get(`http://localhost:5000/students/${id}`);
  return response.data;
};

const studentService = { getStudents, getStudent };

export default studentService;
