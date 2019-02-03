import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    static propTypes = {
        history: PropTypes.object
    }
    formInput = React.createRef()
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.formInput.value.value;
        this.props.history.push(`/store/${storeName}`)
    }
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>
                <input 
                    type="text" 
                    required 
                    ref={this.formInput}
                    placeholder="Store Name"  
                    defaultValue={getFunName()} 
                />
                <button type="submit">Visit Store  ⃗</button>
            </form>
        )
    }
}

export default StorePicker;

