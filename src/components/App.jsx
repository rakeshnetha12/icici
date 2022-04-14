import '../stylesheets/App.css';
import Something from './SlateEditor/Editor';
import './app.css'
function App() {
  return (
    <div className="App">
      <div class="form_bg">
        <div class="form-row">
            <div class="col-md-4 mb-4">
                <label for="validationDefaultUsername">Title <span class="tx-red"> * </span></label>
                <div class="input-group">
                  <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Title" aria-describedby="inputGroupPrepend2" required />
                </div>
            </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault02">Published Date <span class="tx-red"> * </span></label>
            <input type="date" class="form-control" id="reportdate" name="reportdate" />
          </div>
          <div class="col-md-4 mb-4">
            <label for="validationDefault03">Priority <span class="tx-red"> * </span></label>
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Choose...</option>
                <option value="1">Low</option>
                <option value="2">High</option>
                <option value="3">Other</option>
              </select>
          </div>
        </div>
        
        <div class="form-row">
            <div class="col-md-12">
              <label for="validationDefault03">Description <span class="tx-red"> * </span></label>
              <Something/>
            </div>
        </div>
        
        <button class="btn icici_color border-rds-2" type="submit">Save Announcement</button>
      </div> 
    </div>
  );
}

export default App;

