import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation'
import { mapDispatchToProps } from 'src/actions';

class Cart extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
                            showDetails
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { cartReducers } = state
    return { cartReducers }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Cart));
