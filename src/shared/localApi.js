export default function LocalApi({ updatedEmails }) {
  localStorage.setItem("emailInfo", JSON.stringify(updatedEmails));
  return Promise.resolve();
}