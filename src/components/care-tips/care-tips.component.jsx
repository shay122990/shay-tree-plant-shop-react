function CareTips() {
  return (
    <section className="my-5" id="care-tips">
      <h2 className="mb-4 text-center">Tree Care Tips</h2>

      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Watering</h5>
              <p className="card-text">
                Water your tree regularly, especially during hot and dry
                weather. Avoid overwatering.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Sunlight</h5>
              <p className="card-text">
                Make sure your tree gets the appropriate amount of sunlight for
                healthy growth.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Pruning</h5>
              <p className="card-text">
                Remove dead or damaged branches to encourage healthy growth and
                maintain the tree&apos;s shape.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Soil</h5>
              <p className="card-text">
                Keep the soil healthy and well-drained to give your tree the
                nutrients it needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareTips;
