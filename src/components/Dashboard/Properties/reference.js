<div class="form-group">
<label for="exampleFormControlSelect2">Long Term Prices</label>

<style>{`

        .element-visible { display: block }
        .element-hidden { display: none }

  `}</style>
  <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
  <div className={visible ? 'element-visible' : 'element-hidden'}>My element</div>


  <input type="submit" value="Search" onClick={onClick} />
  { showResults ? <Results /> : null }



</div>