def upload
  `curl \
    -H "Content-Type: multipart/form-data" \
    -F url=@exampleContacts.csv \
    -F user_id=1 \
    -F name="testUpload" \
    localhost:3001.com/api/v1/lists`
end

upload
