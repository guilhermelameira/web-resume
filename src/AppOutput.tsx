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
        <div className="canvas">
          <div className="resume letter">
            <Header ast={parsed.header} />
            <Body ast={parsed.body} />
          </div>
        </div>
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
      "title": [
        {
          "value": "Education",
          "decorator": "TOKEN"
        }
      ],
      "entries": [
        {
          "title": [
            {
              "value": "Bachelors of ",
              "decorator": "RAW"
            },
            {
              "value": "Computer Science",
              "decorator": "EMPHASIS"
            }
          ],
          "subtitle": [
            {
              "value": "University of British Columbia (Sept 2015-May 2020)",
              "decorator": "RAW"
            }
          ],
          "summary": [
            {
              "value": [
                {
                  "value": "Techonologies used : ",
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
          "title": [
            {
              "value": "High School (Sept 2015-May 2020)",
              "decorator": "RAW"
            }
          ],
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
      "title": [
        {
          "value": "Work ",
          "decorator": "RAW"
        },
        {
          "value": "Experience",
          "decorator": "EMPHASIS"
        }
      ],
      "entries": [
        {
          "title": [
            {
              "value": "Company 1",
              "decorator": "RAW"
            }
          ],
          "subtitle": [
            {
              "value": "Role 1",
              "decorator": "TOKEN"
            }
          ],
          "summary": [
            {
              "value": [
                {
                  "value": "Did some ",
                  "decorator": "RAW"
                },
                {
                  "value": "stuff",
                  "decorator": "EMPHASIS"
                },
                {
                  "value": " other than this",
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
      "title": [
        {
          "value": "Volunteer",
          "decorator": "RAW"
        }
      ],
      "entries": [
        {
          "title": [
            {
              "value": "NASA",
              "decorator": "RAW"
            }
          ],
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
