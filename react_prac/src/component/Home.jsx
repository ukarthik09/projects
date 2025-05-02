import React from 'react'

const Home = () => {
  return (
    <div className="container my-5 p-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h1 className="display-4 mb-4 text-dark font-weight-bold">Welcome to Our Website</h1>

          <div className="card mb-4 shadow-sm" style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
            <div className="card-body">
              <h2 className="card-title text-primary font-weight-semibold">Discover Amazing Content</h2>
              <p className="card-text text-muted mb-4">
                Explore our latest features, insights, and innovative solutions.
              </p>
              <button
                className="btn"
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  transition: "0.3s",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  fontSize: "16px"
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3 shadow-sm" style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <div className="card-body">
                  <h3 className="card-title text-secondary">Feature 1</h3>
                  <p className="text-muted">Quick overview of our first amazing feature.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 shadow-sm" style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <div className="card-body">
                  <h3 className="card-title text-secondary">Feature 2</h3>
                  <p className="text-muted">Explore the second exciting capability.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 shadow-sm" style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                <div className="card-body">
                  <h3 className="card-title text-secondary">Feature 3</h3>
                  <p className="text-muted">Discover our third innovative solution.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
