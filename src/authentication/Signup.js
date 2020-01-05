import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { authenticationService } from '../_services/authentication.service';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    // redirect to home if already logged in
    if (authenticationService.currentTokenValue) { 
      this.props.history.push('/');
    }
  }

  success = () => {
    toast.success('Su cuenta ha sido creada con éxito, por favor, identifíquese.', {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
      });
  }

  render() {
    return (
      <div>
        <h2>Inscribirse</h2>
        <Formik
          initialValues={{
            username: '',
            password: '',
            email: ''
          }}
          validationSchema={Yup.object().shape({
            username: Yup.string().required('Se requiere un nombre de usuario'),
            password: Yup.string().required('Se requiere una contraseña'),
            email: Yup.string()
              .email('Correo electrónico no válido')  
              .required('Se requiere un correo electrónico')
          })}
          onSubmit={({ username, password, email }, { setStatus, setSubmitting }) => {
            setStatus();
            authenticationService.signup(username, password, email)
              .then(
                () => {
                  this.success();
                  const { from } = this.props.location.state || { from: { pathname: "/signin" } };
                  this.props.history.push(from);
                },
                error => {
                  setSubmitting(false);
                  setStatus(error);
                }
              );
          }}
          render={({ errors, status, touched, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="username">Nombre de usuario</label>
                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                <ErrorMessage name="username" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <Field name="email" type="email" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Crear una cuenta</button>
                {isSubmitting &&
                    <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                }
              </div>
              {status &&
                <div className={'alert alert-danger'}>{status}</div>
              }
            </Form>
          )}
        />
      </div>
    )
  }
}

export default Signup;
