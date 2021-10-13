import PageError from '../components/Common/ErrorPage'
 
function Error({ statusCode }) {
    const msgError = statusCode == 404 ? 'Perdón, la página que buscas no se puede encontrar, te invitamos a regresar a la página principal' : 'Perdón, ha ocurrido un problema por nuestra parte, te invitamos a a regresar a la página principal'
    return (
      <p>
        {statusCode
          ? <PageError codError={statusCode} msgError={msgError}/>
          : 'An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error