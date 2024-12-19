import React from 'react'
import { Navigate } from 'react-router'
import { Link } from 'react-router'


const EyeTestCards = () => {
    const eyeTests = {
        "tests": [
            {
                "id":"00",
                "img":"https://medschool.duke.edu/sites/default/files/styles/freeform_scaled/public/2023-11/eye_mapping.png?itok=MnNu4T3B",
                "testName":"Eye Disease Detection",
                "path":"vatest"
            },
            {
                "id":"01",
                "img":"https://medschool.co/images/detail/snellen.gif",
                "testName":"Visual Acuity Test",
                "path":"vatest"
            },
            {
                "id":"02",
                "img":"https://www.aoa.org/AOA/Images/Patients/Eye%20Conditions/Color_Deficiency_Ishihara_Test_AdobeStock_114210620.jpg",
                "testName":"Color Vision Test",
                "path":"cvtest"
            },
            {
                "id":"03",
                "img":"https://image5.cdnsbg.com/cms.smartbuyglasses.com/wp-content/uploads/2022/02/Mobile-Astigmatism-2.png",
                "testName":"Astigmatism Test",
                "path":"atest"
            },
            {
                "id":"04",
                "img":"https://ars.els-cdn.com/content/image/3-s2.0-B9780124017177000411-f41-01-9780124017177.jpg",
                "testName":"Contrast Sensitivity Test",
                "path":"cstest"
            },
            {
                "id":"05",
                "img":"https://www.aao.org/image.axd?id=4a0d828b-c698-47cf-9455-e265332e7968&t=635998033438800000",
                "testName":"Amsler Grid Test",
                "path":"agtest"
            },
            
            {
                "id":"08",
                "img":"https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/12228/1034069/heroimage0.426580001694122691.jpg",
                "testName":"Dry Eye Test",
                "path":"detest"
            }
        ]
    }
  return (
    <div>
      <div className="bg-gray-100 p-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eyeTests.tests.map((test) => (
          <div
            key={test.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={test.img}
              alt={test.testName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {test.testName}
              </h2>
              
              <Link to={`${test.path}`} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Take test
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default EyeTestCards
