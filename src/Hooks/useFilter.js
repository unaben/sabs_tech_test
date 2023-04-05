const useFilter = (contactData, value) => {
  const multiFilter = contactData.filter((contact) => {
    return Object.keys(contact).some((key) => {
      return contact[key]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase().trim());
    });
  });
  return [multiFilter];
};

export default useFilter;
