import "./Form.css";

function Form() {
  return (
    <>
      <form className="container">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="" className="m-2">
              Email
            </label>
            <br />
            <input
              type="email"
              placeholder="Email"
              className="form-inp1 m-2 border border-secondary-subtle rounded p-2"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="m-2">
              Password
            </label>
            <br />
            <input
              type="password"
              placeholder="Password"
              className="form-inp1 m-2 border border-secondary-subtle rounded p-2"
            />
          </div>
        </div>

        <div className="col-md-12">
          <label htmlFor="" className="m-2">
            Address
          </label>
          <br />
          <input
            type="text"
            className="form-inp1 m-2 border border-secondary-subtle rounded p-2"
            placeholder="1234 Main St"
          />
        </div>

        <div className="row">
          <div className="col-md-6">
            <label htmlFor="" className="m-2">
              City
            </label>
            <br />
            <input
              type="email"
              className="form-inp1 m-2 border border-secondary-subtle rounded p-2"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="" className="m-2">
              State
            </label>
            <br />
            <select
              name=""
              className="form-inp1 m-2 border border-secondary-subtle rounded p-2"
              id=""
            >
              <option value="" selected>
                Choose...
              </option>
              <option value="">Rajasthan</option>
              <option value="">Madhya Pradesh</option>
              <option value="">Kerala</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="" className="m-2">
              Zip
            </label>
            <br />
            <input
              type="email"
              className="form-inp1 m-2 border border-secondary-subtle rounded p-2"
            />
          </div>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck" />
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
          <br />
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
}

export default Form;
