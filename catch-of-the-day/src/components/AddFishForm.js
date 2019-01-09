import React, { Component } from 'react';

class AddFishForm extends Component{
    createFish = (event) => {
        event.preventDefault();
        console.log('making a fish');
    }
    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name"  />
                <input name="price" type="text" placeholder="Price" />
                <select name="status" >
                    <option value="available">Fresh!</option>
                    <option value="available">Sold Out!</option>
                </select>
                <textarea name="desc" placeholder="Descr" />
                <input name="image" type="text" placeholder="Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        )
    }
}

export default AddFishForm;