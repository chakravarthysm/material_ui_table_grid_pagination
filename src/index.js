import React, { Component } from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import _ from "lodash";
import injectTapEventPlugin from "react-tap-event-plugin";
import Table from "./Table";
import "./styles.css";
const courseItems = {
  0: [
    {
      id: "23fa807007c14225842206a66e483656",
      activityId: "76d2a1b4db7b45ada5b858a952714c46",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "76d2a1b4db7b45ada5b858a952714c46",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi1",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:21:47.407Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "e1cb36523b6746edac20e4b33119d101",
      activityId: "144d62aac13f43ae9bd2322c5f93e129",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "144d62aac13f43ae9bd2322c5f93e129",
      isAssessmentPresent: false,
      changelog: ["", "", ""],
      level: "1",
      name: "Hapi10",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:28:31.153Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "bf0f870a3e21481a969848a32b22a4f6",
      activityId: "7c4548b01d6546dcbd69eed7cd97cf4c",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "7c4548b01d6546dcbd69eed7cd97cf4c",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi11",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:29:15.195Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "ae8ea707f0c14f80911f751e7e7845af",
      activityId: "11febd6011814bc7b67ced92b8b0cefe",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "11febd6011814bc7b67ced92b8b0cefe",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi12",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:29:46.049Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "43203721ddd1435180da510c5459bd7c",
      activityId: "b45e8ab2f94d479a9f43b8b3a3859b68",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "b45e8ab2f94d479a9f43b8b3a3859b68",
      isAssessmentPresent: false,
      changelog: ["", "", ""],
      level: "1",
      name: "Hapi2",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:22:16.011Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "e8b20c4d64734b3386c26753a753209b",
      activityId: "52dcb7a4cfd6453099d46d26e919004b",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "52dcb7a4cfd6453099d46d26e919004b",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi3",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:22:52.078Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "c30c07ed83584b32a7a4cb62f0bbad61",
      activityId: "4b766046c16244f39b48700494b68948",
      mainFile: "index_lms.html",
      audience: ["Architects"],
      difficulty: "advanced",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "4b766046c16244f39b48700494b68948",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi4",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "cloud-security",
      createdOn: "2019-03-15T09:23:38.162Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "e3c4beb9df2e4b6594fe2ee81c0ee913",
      activityId: "19969bbab9a345f8a20081b2e82a9a98",
      mainFile: "index_lms.html",
      audience: ["Architects"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "19969bbab9a345f8a20081b2e82a9a98",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi5",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:26:05.976Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "0a039a41dfa84a0694f2aa5375004650",
      activityId: "01e5acc838124f8da31e85ecb269533f",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "01e5acc838124f8da31e85ecb269533f",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi6",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:26:37.699Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "181ed87a4c1d43b4b0f86d8664cb8f5f",
      activityId: "a7679a19878a4a6db38c065ee5bf1959",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "a7679a19878a4a6db38c065ee5bf1959",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi7",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        {
          title: "Course Objectives",
          value: "q\n"
        }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:27:03.925Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    }
  ],
  1: [
    {
      id: "da43921d6f47449c8735179828f7c3af",
      activityId: "57927307e5044cd9bc26ef7d6173353b",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "57927307e5044cd9bc26ef7d6173353b",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi8",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        { title: "Course Objectives", value: "q\n" }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:27:31.229Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    },
    {
      id: "4ba4f3765ad04d4686050093e0e213de",
      activityId: "5a140c20aa6d43f5b50c85ee028d111e",
      mainFile: "index_lms.html",
      audience: ["Front-End Developers"],
      difficulty: "beginner",
      duration: 1,
      minPoints: null,
      maxPoints: null,
      teaserImage: "q",
      teaserVideo: "q",
      views: 0,
      prerequisites: [],
      meta: null,
      deprecated: false,
      isLatest: true,
      version: 1,
      rootId: "5a140c20aa6d43f5b50c85ee028d111e",
      isAssessmentPresent: false,
      changelog: ["", ""],
      level: "1",
      name: "Hapi9",
      shortName: "Hapi.js Security",
      description:
        "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>",
      tagLine: "Hapi.js Security",
      descriptors: [
        {
          title: "Course Description",
          value:
            "<p>Hapi is a great choice for a server side framework because of its first level support for common security practices. This course will help you get the most from those security features as well as help arm you with the knowledge required to keep your Hapi applications locked down.</p>"
        },
        { title: "Course Objectives", value: "q\n" }
      ],
      language: "en",
      languages: ["en", "ja", "zh"],
      public: true,
      active: true,
      category: "mobile",
      createdOn: "2019-03-15T09:28:02.162Z",
      genericCount: "1",
      assessmentCount: "0",
      upgrade: null
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perPage: 10,
      offset: 0,
      elemsBulkId: [],
      selectedPage: 0,
      searchText: "",
      sort: {
        by: "name",
        order: "asc"
      },
      viewSelectedOnly: false,
      coursesMeta: []
    };
  }

  componentWillMount() {
    const prevCohortCourses = [
      "11febd6011814bc7b67ced92b8b0cefe",
      "a7679a19878a4a6db38c065ee5bf1959",
      "5a140c20aa6d43f5b50c85ee028d111e"
    ];
    const activePageCourses = courseItems[this.state.selectedPage].map(
      ({
        activityId,
        name,
        version,
        description,
        active,
        isSelected = false
      }) => ({
        activityId,
        name,
        version,
        description,
        active,
        isSelected
      })
    );
    const elemsBulkId = [];
    const coursesPrevMeta = [];
    prevCohortCourses.forEach(p =>
      coursesPrevMeta.push({ activityId: p, isSelected: true })
    );
    activePageCourses.forEach(c => {
      const index = prevCohortCourses.indexOf(c.activityId);
      let isSelected = index !== -1;
      if (this.state.coursesMeta.length) {
        const prev = _.find(
          this.state.coursesMeta,
          f => f.activityId === c.activityId
        );
        if (prev) isSelected = prev.isSelected;
      }
      c.isSelected = isSelected;
      if (c.isSelected)
        elemsBulkId.push(
          _.findIndex(activePageCourses, a => a.activityId === c.activityId)
        );
    });
    console.log("elemsBulkId1", elemsBulkId);
    this.setState({
      coursesMeta: _.unionBy(
        activePageCourses,
        this.state.coursesMeta,
        coursesPrevMeta,
        "activityId"
      ),
      elemsBulkId
    });
  }
  pageChanged() {
    const prevCohortCourses = [
      "11febd6011814bc7b67ced92b8b0cefe",
      "a7679a19878a4a6db38c065ee5bf1959",
      "5a140c20aa6d43f5b50c85ee028d111e"
    ];
    const activePageCourses = courseItems[this.state.selectedPage].map(
      ({
        activityId,
        name,
        version,
        description,
        active,
        isSelected = false
      }) => ({
        activityId,
        name,
        version,
        description,
        active,
        isSelected
      })
    );
    const elemsBulkId = [];
    const coursesPrevMeta = [];
    prevCohortCourses.forEach(p =>
      coursesPrevMeta.push({ activityId: p, isSelected: true })
    );
    activePageCourses.forEach(c => {
      const index = prevCohortCourses.indexOf(c.activityId);
      let isSelected = index !== -1;
      if (this.state.coursesMeta.length) {
        const prev = _.find(
          this.state.coursesMeta,
          f => f.activityId === c.activityId
        );
        if (prev) isSelected = prev.isSelected;
      }
      c.isSelected = isSelected;
      if (c.isSelected)
        elemsBulkId.push(
          _.findIndex(activePageCourses, a => a.activityId === c.activityId)
        );
    });
    console.log("elemsBulkId2", elemsBulkId);
    this.setState({
      coursesMeta: _.unionBy(
        activePageCourses,
        this.state.coursesMeta,
        coursesPrevMeta,
        "activityId"
      ),
      elemsBulkId
    });
  }
  onBulkRowSelection(rows) {
    const coursesMeta = _.clone(this.state.coursesMeta);
    if (rows === "all") {
      coursesMeta.forEach(c => {
        if (_.findIndex(courseItems, a => a.activityId === c.activityId) !== -1)
          c.isSelected = true;
      });
      rows = Array.from(Array(courseItems.length).keys());
    } else if (rows === "none") {
      coursesMeta.forEach(c => {
        if (_.findIndex(courseItems, a => a.activityId === c.activityId) !== -1)
          c.isSelected = false;
      });
      rows = [];
    } else {
      coursesMeta.forEach(c => {
        rows.forEach(i => {
          if (courseItems[i] && courseItems[i].activityId === c.activityId) {
            c.isSelected = true;
          }
        });
        _.difference(this.state.elemsBulkId, rows).forEach(i => {
          if (
            this.props.courses.items[i] &&
            this.props.courses.items[i].activityId === c.activityId
          ) {
            c.isSelected = false;
          }
        });
      });
    }
    this.setState({ coursesMeta, elemsBulkId: rows });
  }
  getSelectionsCount() {
    return _.filter(this.state.coursesMeta, "isSelected").length;
  }
  render() {
    const config = {
      styles: {
        columns: {
          name: {
            width: "20%"
          },
          version: {
            width: "15%"
          },
          description: {
            width: "50%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          },
          courseStatus: {
            width: "15%"
          }
        },
        columnData: {
          name: {
            width: "20%"
          },
          version: {
            width: "15%"
          },
          description: {
            width: "50%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          },
          courseStatus: {
            width: "15%",
            color: "#10938c"
          }
        }
      },
      columns: [
        {
          key: "name",
          label: "name",
          sortable: true
        },
        {
          key: "version",
          label: "version",
          sortable: true
        },
        {
          key: "description",
          label: "description",
          sortable: true
        },
        {
          key: "courseStatus",
          label: "status",
          sortable: false
        }
      ],
      perPagePosition: "top",
      searchConfig: {
        enabled: true,
        placeholder: "search courses...",
        handleSearch: () => {},
        searchText: this.state.searchText
      },
      sortConfig: {
        sortBy: this.state.sort.by,
        order: this.state.sort.order
      },
      enableViewSelectedOnly: false,
      viewSelectedOnly: this.state.viewSelectedOnly
    };
    const _me = this;
    config.actions = {
      loadNext: {
        label: "next",
        action: (offset, selected) => {
          _me.setState({ selectedPage: selected }, () => {
            _me.pageChanged();
          });
        },
        handlePerPageChange: (event, index, values) => {}
      },
      handleSort: {
        action: () => {}
      },
      handleViewSelected: {
        action: () => {}
      }
    };

    if (0) {
      config.data = [];
    } else {
      config.data = courseItems[this.state.selectedPage];
      config.pagination = {
        limit: 10,
        offset: 0,
        total: 12
      };
      config.pagination && config.pagination.total
        ? (config.pagination.pages =
            config.pagination.total / this.state.perPage)
        : 1;
      config.pagination && config.pagination.total
        ? (config.pagination.perPage = this.state.perPage)
        : 10;
      config.pagination && config.pagination.total && this.state.selectedPage
        ? (config.pagination.selectedPage = this.state.selectedPage)
        : 1;
      config.pagination && typeof config.pagination.total !== "undefined"
        ? (config.pagination.total = config.pagination.total)
        : 0;
      config.pagination && typeof config.pagination.remaining !== "undefined"
        ? (config.pagination.total = config.pagination.remaining)
        : 0;
    }

    const count = this.getSelectionsCount();
    return (
      <div className="col-xs-12">
        <Table
          onRowSelection={this.onBulkRowSelection.bind(this)}
          selectedData={this.state.elemsBulkId}
          config={config}
          count={count}
        />
      </div>
    );
  }
}
try {
  injectTapEventPlugin();
} catch (e) {}
const rootElement = document.getElementById("root");
ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  rootElement
);
