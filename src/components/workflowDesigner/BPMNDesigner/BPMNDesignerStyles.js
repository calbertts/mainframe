var BPMNDesignerStyles = {

  controls: {
    width: 'auto',
    position: 'absolute',
    right: '20px',
    top: '22px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    transform: 'translateX(0)'
  },

  controlsTranslated: {
    transform: 'translateX(-331px)'
  },

  ioButton: {
    padding: '0',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#555555',
    background: 'none',
    border: 'none',
    fontFamily: 'app',

    ':hover': {
      color: 'rgb(255, 116, 0)'
    }
  },

  ioControlList: {
    listStyle: 'none',
    padding: '5px',
    margin: '0'
  },

  ioControl: {
    background: '#FFF',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3)',
    padding: '5px'
  },

  ioTopControl: {
    borderRadius: '2px 2px 0 0'
  },

  ioMiddleControl: {
    borderRadius: '0'
  },

  ioBottomControl: {
    borderRadius: '0 0 2px 2px'
  },

  zoomReset: {
    marginBottom: '10px !important'
  }
};

export default BPMNDesignerStyles;




/*.io-control-list a,
.io-control-list a:visited,
.io-control-list button {
  padding: 0;
  outline: none;
  cursor: pointer;
  font-size: 22px;
  line-height: 26px;
  color: #555555;
  background: none;
  border: none
}
.io-control-list a:hover,
.io-control-list a:visited:hover,
.io-control-list button:hover {
  color: #333333
}
.io-control-list a.inactive,
.io-control-list a:visited.inactive,
.io-control-list button.inactive {
  color: #E0E0E0;
  cursor: default
}
.io-control-list.io-horizontal,
.io-control-list.io-horizontal li {
  display: inline-block
}
.io-control-list.io-horizontal a {
  padding: 2px;
  margin: 0 5px
}
.io-control-list.io-horizontal button {
  margin: 0 5px
}*/