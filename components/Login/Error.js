export default ({ message }) =>
  <aside>
    {message}
    <style jsx>{`
      aside {
        padding: 15px;
        font-size: 14px;
        color: white;
        background-color: #db291c;
        text-align: center;
        border-radius: 6px;
        opacity: 0.7;
        margin: 15px 0;
      }
    `}</style>
  </aside>;
