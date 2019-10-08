import React, {Component} from 'react';
import Header from './components/Header';
import Body from './components/Body';

class AppOutput extends Component {
  state = {
    parsed: null
  };

  componentDidMount = () => {};

  render = () => {
    return (
      <div id="output">
        <Header ast={parsed.header} />
        <Body ast={parsed.body} />
      </div>
    );
  };
}

export default AppOutput;

const parsed = {
  "header": {
    "name": {
      "value": "John Doe"
    },
    "links": [
      {
        "value": "lin1"
      },
      {
        "value": "lin2"
      },
      {
        "value": "lin2"
      }
    ]
  },
  "body": [
    {
      "title": {
        "value": "Education"
      },
      "entries": [
        {
          "title": {
            "value": "Bachelors of Computer Science"
          },
          "subtitle": {
            "value": "University of British Columbia (Sept 2015-May 2020)"
          },
          "summary": [
            {
              "value": [
                {
                  "value": "Techonologies used : *React*, *Flask*",
                  "decorator": "RAW"
                },
                {
                  "value": "React",
                  "decorator": "TOKEN"
                },
                {
                  "value": ", ",
                  "decorator": "RAW"
                },
                {
                  "value": "Flask",
                  "decorator": "TOKEN"
                }
              ],
              "is_bullet": false
            },
            {
              "value": [
                {
                  "value": "CPSC 310, 410, ",
                  "decorator": "RAW"
                },
                {
                  "value": "random",
                  "decorator": "EMPHASIS"
                }
              ],
              "is_bullet": true
            }
          ]
        },
        {
          "title": {
            "value": "High School (Sept 2015-May 2020)"
          },
          "summary": [
            {
              "value": [
                {
                  "value": "Failed it",
                  "decorator": "RAW"
                }
              ],
              "is_bullet": true
            },
            {
              "value": [
                {
                  "value": "Not finishing",
                  "decorator": "RAW"
                }
              ],
              "is_bullet": false
            }
          ]
        }
      ]
    },
    {
      "title": {
        "value": "Work Experience"
      },
      "entries": [
        {
          "title": {
            "value": "Company 1"
          },
          "subtitle": {
            "value": "Role 1"
          },
          "summary": [
            {
              "value": [
                {
                  "value": "Did some ",
                  "decorator": "RAW"
                },
                {
                  "value": "stuff ",
                  "decorator": "EMPHASIS"
                },
                {
                  "value": "other than this",
                  "decorator": "RAW"
                }
              ],
              "is_bullet": true
            }
          ]
        }
      ]
    },
    {
      "title": {
        "value": "Volunteer"
      },
      "entries": [
        {
          "title": {
            "value": "NASA"
          },
          "summary": [
            {
              "value": [
                {
                  "value": "Space Program",
                  "decorator": "RAW"
                }
              ],
              "is_bullet": true
            }
          ]
        }
      ]
    }
  ]
};
