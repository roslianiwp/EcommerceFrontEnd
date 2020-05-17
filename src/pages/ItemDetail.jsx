import React, { Fragment } from "react";
import Navigation from "../components/NavBar";
import Footer from "../components/Footer";
import ItemDetailComp from "../components/ItemDetailComp";
import { doSignOut } from "../store/action/actionUser";
import { getDetail } from "../store/action/actionProduct";
import { postTrans } from "../store/action/actionTransaction";

// import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ItemDetail extends React.Component {
  componentDidMount = async () => {
    const paramCategory = await this.props.match.params.id;
    if (paramCategory) {
      this.props.getDetail(paramCategory);
    }
  };
  render() {
    return (
      <Fragment>
        <Navigation {...this.props} />
        <ItemDetailComp
          id={this.props.dataDetail.id}
          gambar={this.props.dataDetail.image}
          harga={this.props.dataDetail.price}
          nama={this.props.dataDetail.name}
          warna={this.props.dataDetail.color}
          size={this.props.dataDetail.size}
          postCart={(e) => this.props.postTrans(e)}
          {...this.props}
        />
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.user.is_login,
    dataDetail: state.product.dataDetail,
    countCart: state.product.countCart,
  };
};

const mapDispatchToProps = {
  doSignOut,
  getDetail,
  postTrans,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
