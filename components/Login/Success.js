export default ({ message }) =>
  <aside>
    {message}
    <style jsx>{`
      aside {
        padding: 15px;  
        font-size: 14px;
        text-align: center;
        margin: 15px 0;
        color: #CF0A2C;
        background: transparent;
        border-radius: 6px;
        border: 0.5px solid #CF0A2C;
      }
    `}</style>
  </aside>;
