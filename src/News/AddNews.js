import React, { Component } from "react";
// Import FilePond
import { FilePond, registerPlugin, Doka } from "react-filepond";
// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the plugin code
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";

// Import the plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// controllers
import News_controller from "../Controller/News/News.controller.js";

import "./AddNews.css";

registerPlugin(
  //   FilePondPluginImageEdit,
  FilePondPluginImagePreview,
  FilePondPluginImageCrop
);

class AddNews extends Component {
  constructor() {
    super();
    this.state = {
      coverImage: null,
      images: []
    };
    // this.filePond;
  }

  async handleImage(img) {
    var imgList = [];
    await img.map(data => {
      imgList.push(data.file);
    });
    this.setState({
      images: imgList
    });
  }

  handleCoverImage(img) {
    this.setState({
      coverImage: img[0].file
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    var data = {
      title: e.target.title.value,
      type: e.target.type.value,
      cover: this.state.coverImage,
      images: this.state.images
    };

    console.log(data);

    await News_controller.addNews(data);
  }

  render() {
    return (
      <div className="mrad_addNews">
        <h1>Add News</h1>
        <hr></hr>

        <form onSubmit={event => this.handleSubmit(event)}>
          <div className="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input name="title" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Category</label>
            <select
              name="type"
              className="form-control"
              id="exampleFormControlSelect1"
            >
              <option></option>
              <option>Charity</option>
              <option>Projects</option>
              <option>News</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Cover</label>
            <FilePond
              onupdatefiles={fileItems => this.handleCoverImage(fileItems)}
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Image</label>
            <FilePond
              maxFiles={4}
              allowMultiple={true}
              onupdatefiles={fileItems => this.handleImage(fileItems)}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Save
          </button>
          <button type="reset" class="btn btn-danger">
            clear
          </button>
        </form>
      </div>
    );
  }
}

export default AddNews;
