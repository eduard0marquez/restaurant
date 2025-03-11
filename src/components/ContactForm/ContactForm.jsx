import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import ContactInfo from "../ContactInfo/ContactInfo";

const validationSchema = Yup.object({
    firstName: Yup.string().required('El nombre es requerido'),
    lastName: Yup.string().required('El apellido es requerido'),
    email: Yup.string().email('Mail incorrecto').required('El email es requerido'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Tiene que ser un número').required('El número de teléfono es requerido'),
    date: Yup.date().required('La fecha es requerida'),
    guestNumber: Yup.number().min(1, 'Al menos un invitado').required('En numero es requerido'),
    comments: Yup.string()
})


function ContactForm() {
    const handleSubmit = (values, {resetForm}) => {
        //Enviar email con emailjs
        
        const serviceId = 'service_qm6xgcq';
        const templateId = 'template_e5i5wis';
        const publicKey = 'gD27okxSSHwL1ViRb';

        emailjs
        .send(serviceId, templateId, {
            to_name: 'Restaurant App',
            from_name: values.firstName + " " + values.lastName,
            from_email: values.email,
            message: values.comments,
            guest_number: values.guestNumber,
            date: values.date,
            phone: values.phone,
            subjet:"Nueva Reservación Pagina Web"
        }, publicKey)
            .then(
                () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensaje enviado!',
                        text: 'Su mensaje fue enviado con exito.',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    resetForm()
                },
                (error)=>{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: 'El mensaje no se pudo enviar, intente de nuevo.',
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                    });
                    console.log('emailjs error:', error);
                }
        )
   }


  return (
      <div className="container my-5">
          <div className="row">
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                  <ContactInfo/>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
    <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              date: '',
              guestNumber: '',
              comments: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-100">
                <div className="row mb-3 mt-3">
                  <div className="col-md-6">
                    <label htmlFor="firstName">Nombre</label>
                    <Field
                      type="text"
                      id="firstName"
                      name="firstName"
                      className={`form-control ${
                        errors.firstName && touched.firstName ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="firstName" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastName">Apellido</label>
                    <Field
                      type="text"
                      id="lastName"
                      name="lastName"
                      className={`form-control ${
                        errors.lastName && touched.lastName ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="lastName" className="invalid-feedback" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${
                        errors.email && touched.email ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="email" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone">Número Teléfonico </label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${
                        errors.phone && touched.phone ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="phone" className="invalid-feedback" />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="date">Fecha</label>
                    <Field
                      type="date"
                      id="date"
                      name="date"
                      className={`form-control ${
                        errors.date && touched.date ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage component="div" name="date" className="invalid-feedback" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="guestNumber">Número de invitados</label>
                    <Field
                      type="number"
                      id="guestNumber"
                      name="guestNumber"
                      className={`form-control ${
                        errors.guestNumber && touched.guestNumber ? 'is-invalid' : ''
                      }`}
                    />
                    <ErrorMessage
                      component="div"
                      name="guestNumber"
                      className="invalid-feedback"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comments">Commentarios</label>
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    className={`form-control ${
                      errors.comments && touched.comments ? 'is-invalid' : ''
                    }`}
                  />
                  <ErrorMessage component="div" name="comments" className="invalid-feedback" />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
              </div>
          </div>
      
    </div>
  )
}

export default ContactForm
