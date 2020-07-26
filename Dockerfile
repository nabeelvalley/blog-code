# step 1 - FROM baseImage
FROM node:12  

# step 2 - COPY source destination
COPY app.js app.js 

# step 3 - EXPOSE port
EXPOSE 8080 

# step 4 - CMD stratupCommandArray
CMD ["node", "app.js"] 