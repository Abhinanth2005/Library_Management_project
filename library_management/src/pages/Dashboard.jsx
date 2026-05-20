import Navbar from "../components/Navbar";

const Dashboard = () => {

  return (

    <>
      <Navbar />

      <div className="container py-5 ">

        <h3 className="fw-bold mb-4 text-decoration-underline">
          Dashboard
        </h3>

        <div className="row g-4">

          <div className="col-lg-4 col-md-6 ">

            <div className="card shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-success ">Total Books</h5>

                <h2 className="fw-bold">
                  120
                </h2>

              </div>

            </div>

          </div>

          <div className="col-lg-4 col-md-6">

            <div className="card shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-warning ">Borrowed Books</h5>

                <h2 className="fw-bold">
                  45
                </h2>

              </div>

            </div>

          </div>

          <div className="col-lg-4 col-md-6">

            <div className="card shadow-sm border-0">

              <div className="card-body">

                <h5 className="text-info">Authors</h5>

                <h2 className="fw-bold">
                  30
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Dashboard;