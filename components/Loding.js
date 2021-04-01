export default function Loding() {
  return (
    <div className="loadingcontaner">
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <style jsx>
        {`
          .loadingcontaner {
            margin-top: 40px;
          }
        `}
      </style>
    </div>
  );
}
