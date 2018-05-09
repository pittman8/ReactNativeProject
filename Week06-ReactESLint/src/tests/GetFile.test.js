import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import GetFile from "../components/GetFile";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("GetFile Test", function() {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders and displays the word Nine", () => {
    const wrapper = shallow(<GetFile />);
    console.log(wrapper);
    const welcome = <p className="App-intro">File: unknown</p>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it("renders state of File paragraph after button click", () => {
    const wrapper = shallow(<GetFile />);
    const nineSign = <p className="App-intro">File: url-file.js</p>;
    wrapper.find("button.elf").simulate("click");
    expect(wrapper.contains(nineSign)).toEqual(true);
  });
});
