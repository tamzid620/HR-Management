• primary_color :  #25476a ;
• secondary_color : gray-100 ;
• .top-padding {
    padding-top: 70px;
}

<!-- userDetailsInfo backup : UdBackup.jsx  -->

  <!-- const [image, setImage] = useState([]); -->

  <!-- const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fr = new FileReader();
    setImage(file);
    
    fr.onload = () => {
      const url = fr.result;
      setImage(url);
      localStorage.setItem('image', url); 
    };

    fr.readAsDataURL(file);
    }; -->

<!-- {/* File section  */}
            <div>
              <label htmlFor="image">File:</label>
              <input
                required
                className="shadow appearance-none border rounded w-full py-1.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                placeholder="Your File"
                type="file"
                name="image"
                id="image"
                onChange={handleFileChange}
              />
            </div> -->
