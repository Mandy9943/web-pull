import PageError from '../components/Common/ErrorPage'


function Error({ statusCode }) {
    
    const msgError = statusCode == 404 ? 'Lo sentimos , no logramos encontrar lo que buscas.': 'Perdón, ha ocurrido un problema por nuestra parte, te invitamos a regresar a la página principal';
    
    return (
      <>
        {statusCode
          ? <PageError codError={statusCode} msgError={msgError}/>
          : 'An error occurred on client'}
      </>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error