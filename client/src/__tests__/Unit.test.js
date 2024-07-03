import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "../App";
configure({ adapter: new Adapter() });
describe('Test case for App', () => {
  it('always renders a div', () => {
    const output = mount(
      <App />
    )
    const divs = output.find('div')
    expect(divs.length).toBeGreaterThan(0)
  })
  it('renders correctly', () => {
    const output = shallow(
      <App />
    )
    expect(shallowToJson(output)).toMatchSnapshot()
  })
  it('contains everything else that gets rendered', () => {
    const output = mount(
      <App />
    )
    const divs = output.find('div');
    const outermostDiv = divs.first();
    expect(outermostDiv.children()).toEqual(output.children().children())
  })
  it('test1', () => {
    expect('0').toBe('0');
  });
  it('test2', () => {
    expect('1').toBe('1');
  });
});