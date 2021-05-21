export default ({ message }) =>
  <aside>
    {message}
    <style jsx>{`
      aside {
          padding: 15px;
          font-size: 14px;
          text-align: center;
          margin: 15px 0px;
          color: #28a745;
          background: transparent;
          border-radius: 6px;
          border: 0.5px solid #28a745;
          font-weight: 500;
      }
    `}</style>
  </aside>;
// border: 0.5px solid #CF0A2C;
// color: #CF0A2C;