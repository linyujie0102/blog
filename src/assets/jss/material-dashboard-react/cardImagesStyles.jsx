const cardImagesStyles = {
  cardImgTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)"
  },
  cardImgBottom: {
    width: "100%",
    borderBottomRightRadius: "calc(.25rem - 1px)",
    borderBottomLeftRadius: "calc(.25rem - 1px)"
  },
  cardImgOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem"
  },
  cardImg: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)"
  },
  stats: {
    color: "#999999",
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardWrapper: {
    width: "17rem",
    display: "inline-block",
    marginLeft: "1rem",
    marginRight: "1rem"
  }
};

export default cardImagesStyles;
