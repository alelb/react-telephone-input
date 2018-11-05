var _templateObject = _taggedTemplateLiteralLoose(['\n  .country-list {\n    position: absolute;\n    overflow-y: scroll;\n    top: 0;\n    @media (max-width: 576px) {\n      width: 100% !important;\n      height: 100% !important;\n    }\n  }\n  .flag-dropdown {\n    @media (max-width:  576px) {      \n      z-index: 20;\n    }\n  }\n  .open-dropdown {\n    @media (max-width:  576px) {\n      position: fixed;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      height: 100%;\n      width: 100%;\n  }\n'], ['\n  .country-list {\n    position: absolute;\n    overflow-y: scroll;\n    top: 0;\n    @media (max-width: 576px) {\n      width: 100% !important;\n      height: 100% !important;\n    }\n  }\n  .flag-dropdown {\n    @media (max-width:  576px) {      \n      z-index: 20;\n    }\n  }\n  .open-dropdown {\n    @media (max-width:  576px) {\n      position: fixed;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      height: 100%;\n      width: 100%;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import RTI from './withStyles';

var MobileReactTelephoneInput = styled(RTI)(_templateObject);
export default MobileReactTelephoneInput;