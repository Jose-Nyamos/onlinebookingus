import React from 'react'

import './style.css';

function LocationDetails() {
    return (
        <div>

            <div class="main-content-wrap sidenav-open d-flex flex-column">


                <div class="multisteps-form__panel shadow p-4 rounded bg-white js-active" data-animation="scaleIn">
                    <h3 class="multisteps-form__title">Property Description</h3>
                    <div class="multisteps-form__content">
                        <div class="form-row mt-4">
                            <div class="col-12">
                                <input class="multisteps-form__input form-control" name="name" type="text" placeholder="Country" />
                            </div>
                            <div class="col-12">
                                <input class="multisteps-form__input form-control" name="address_line_1" type="text" placeholder="address_line_1" />
                            </div>
                        </div>

                        <div class="form-row mt-4">
                            <div class="col-12">
                                <input class="multisteps-form__input form-control" name="address_line_2" type="address_line_2" placeholder="address_line_2" />
                            </div>
                            
                        </div>

                        <div class="form-row mt-4">
                            <div class="col-12 col-sm-6">

                                <textarea cols={10} rows={10} class="multisteps-form__textarea form-control" placeholder="Summary"></textarea>
                            </div>

                        </div>
                        <div class="button-row d-flex mt-4">
                            <button class="btn btn-primary ml-auto js-btn-next" type="button" title="Save">Save</button>
                        </div>
                    </div>
                </div>


            </div>
            
        </div>
    )
}

export default LocationDetails
