describe('file upload', () => {
    it.skip('uploading one file', () => {
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
  
      cy.get('#filesToUpload').attachFile('nature1.jpg');
  
      cy.get('#fileList > li').should('have.text', 'nature1.jpg');
    });
  
    it.skip('uploading multiple files', () => {
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
  
      //? FIRST WAY
      const img1 = 'nature1.jpg';
      const img2 = 'nature2.jpg';
      const img3 = 'nature3.jpg';
  
      cy.get('#filesToUpload')
        .attachFile(img1)
        .get('#fileList > li')
        .should('have.text', 'nature1.jpg')
        .wait(2000)
        .get('#filesToUpload')
        .attachFile(img2)
        .get('#fileList > li')
        .should('have.text', 'nature2.jpg')
        .wait(2000)
        .get('#filesToUpload')
        .attachFile(img3)
        .get('#fileList > li')
        .should('have.text', 'nature3.jpg')
        .wait(2000);
  
      //? SECOND WAY
      cy.get('#filesToUpload').attachFile([img1, img2, img3]);
  
      //? THIRD WAY
      cy.get('#filesToUpload').attachFile([
        'nature1.jpg',
        'nature2.jpg',
        'nature3.jpg',
      ]);
    });
  
    it('overriding a file name', () => {
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
  
      //? {degiskenin ismi : degiskenin degeri} -> object ici
      cy.get('#filesToUpload').attachFile({
        filePath: 'nature1.jpg',
        fileName: 'nature.jpg',
      });
    });
  });