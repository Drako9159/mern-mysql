import { Formik, Form } from "formik";

export default function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
      >
        {({ handleChange }) => (
          <Form>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={{ handleChange }}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={{ handleChange }}
            />
            <button>Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
