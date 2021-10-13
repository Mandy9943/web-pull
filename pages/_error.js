import PageError from '../components/Common/ErrorPage'
 
function Error({ statusCode }) {
    return (
      <p>
        {statusCode
          ? <PageError codError={statusCode}/>
          : 'An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  
  export default Error