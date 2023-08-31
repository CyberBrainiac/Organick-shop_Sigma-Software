import "./formOrder.scss"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import sendOrder from "@/utils/sendOrder/sendOrder"
import { useProduct } from "../contexts/CartProvider"
import { UserInfoType } from "@/types/main-types"
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  address: Yup.string().required('Address is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  message: Yup.string(),
});

const FormOrder = () => {
  const { getProducts } = useProduct();
  const navigate = useNavigate();

  const handleSubmit = (userInfo: UserInfoType) => {
    const orderProducts = getProducts;
    sendOrder({userInfo, orderProducts});
    navigate('/completedOrder');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="form-order">
        <div className="form-order__field">
          <label htmlFor="name">Full Name*</label>
          <Field type="text" id="name" name="name" placeholder="Your Name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div className="form-order__field">
          <label htmlFor="email">Your Email*</label>
          <Field type="email" id="email" name="email" placeholder="Example@yourmail.com" />
          <ErrorMessage name="email" component="div" className="error" />
        </div>
        <div className="form-order__field">
          <label htmlFor="address">Address*</label>
          <Field type="text" id="address" name="address" placeholder="Your company  address" />
          <ErrorMessage name="address" component="div" className="error" />
        </div>
        <div className="form-order__field">
          <label htmlFor="phoneNumber">Phone number*</label>
          <Field type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone" />
          <ErrorMessage name="phoneNumber" component="div" className="error" />
        </div>
        <div className="form-order__field">
          <label htmlFor="message">Message</label>
          <Field type="text" id="message" name="message" placeholder="Some extra information" />
          <ErrorMessage name="message" component="div" className="error" />
        </div>
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  );
};

export default FormOrder;