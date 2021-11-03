import "./ErrorPageNew.css";
import ImgError from "./img/Gráfico Página de error.svg";
import { useRouter } from 'next/router';


export default function ErrorPage({ codError, msgError }) {

  const router = useRouter();
  console.log();
  return (
    <>
      <div id="notfound">
        <div className="notfoundWrapper">
        <div className="notfoundImg">
          <div className="imgContent">

          <img src={ImgError}/>
          </div>
        </div>
        <div className="notfoundInfo">
          <div className="notfoundTitle">
            <p>Parece que algo salió mal...</p>
          </div>
          <div className="notfoundDescription">
            <p>{msgError}</p>
          </div>
          <div className="notfoundLinks">
            <div className="notfoundLink">
              <button onClick={() => router.back()}>IR ATRAS</button>
            </div>
            <div className="notfoundLink">
              <button onClick={()=> router.push(router.asPath)}>REINTENTAR</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    </>
  );
}
