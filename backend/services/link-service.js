import pool from "../configs/mysql-config.js";
import shortid from "shortid";

export const shorten = async (url) => {
  try {
    const id = shortid.generate();
    await pool.query(`insert into link (id, url) values (?, ?)`, [id, url]);

    return id;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUrl = async (id) => {
  try {
    const [[result]] = await pool.query(`select * from link where id = ?`, [
      id,
    ]);

    return result.url;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const isValidURL = (url) => {
  return /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(
    url
  );
};
