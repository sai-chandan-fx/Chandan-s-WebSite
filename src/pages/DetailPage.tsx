
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toTitleCase } from '@/lib/utils';

// Map of category/slug pairs to Google Drive file IDs
const videoMap: Record<string, string> = {
  // Composition videos
  'composition/super-bike': 'YOUR_GOOGLE_DRIVE_FILE_ID_1',
  'composition/marvel-10': 'YOUR_GOOGLE_DRIVE_FILE_ID_2',
  'composition/electro-blast': 'YOUR_GOOGLE_DRIVE_FILE_ID_3',
  'composition/apple-disintegrate-effect': 'YOUR_GOOGLE_DRIVE_FILE_ID_4',
  'composition/snow': 'YOUR_GOOGLE_DRIVE_FILE_ID_5',
  'composition/aurora': 'YOUR_GOOGLE_DRIVE_FILE_ID_6',
  'composition/christmas': 'YOUR_GOOGLE_DRIVE_FILE_ID_7',
  'composition/car-cgi': 'YOUR_GOOGLE_DRIVE_FILE_ID_8',
  'composition/smart-vector': 'YOUR_GOOGLE_DRIVE_FILE_ID_9',
  'composition/shazam': 'YOUR_GOOGLE_DRIVE_FILE_ID_10',
  'composition/dr-strange': 'YOUR_GOOGLE_DRIVE_FILE_ID_11',
  'composition/camera-ghost': 'YOUR_GOOGLE_DRIVE_FILE_ID_12',
  'composition/ben-10': 'YOUR_GOOGLE_DRIVE_FILE_ID_13',
  'composition/watch-ads': 'YOUR_GOOGLE_DRIVE_FILE_ID_14',
  
  // FX videos
  'fx/force-field': 'YOUR_GOOGLE_DRIVE_FILE_ID_15',
  'fx/mewtwo-shadow-ball': 'YOUR_GOOGLE_DRIVE_FILE_ID_16',
  'fx/snow': 'YOUR_GOOGLE_DRIVE_FILE_ID_17',
  'fx/fire-pose': 'YOUR_GOOGLE_DRIVE_FILE_ID_18',
  'fx/fire-kick': 'YOUR_GOOGLE_DRIVE_FILE_ID_19',
  'fx/tornado': 'YOUR_GOOGLE_DRIVE_FILE_ID_20',
  'fx/flare-gun': 'YOUR_GOOGLE_DRIVE_FILE_ID_21',
  'fx/growth-fx': 'YOUR_GOOGLE_DRIVE_FILE_ID_22',
  'fx/godzilla-fx': 'YOUR_GOOGLE_DRIVE_FILE_ID_23',
  'fx/vellum-hair': 'YOUR_GOOGLE_DRIVE_FILE_ID_24',
  'fx/spawn-fx': 'YOUR_GOOGLE_DRIVE_FILE_ID_25',
  'fx/cloud-img': 'YOUR_GOOGLE_DRIVE_FILE_ID_26',
  'fx/portal': 'YOUR_GOOGLE_DRIVE_FILE_ID_27',
  'fx/river-sim': 'YOUR_GOOGLE_DRIVE_FILE_ID_28',
  'fx/dust-shockwave': 'YOUR_GOOGLE_DRIVE_FILE_ID_29',
  'fx/wall-breaking': 'YOUR_GOOGLE_DRIVE_FILE_ID_30',
  
  // Experience videos
  'experience/scp-resonance': 'YOUR_GOOGLE_DRIVE_FILE_ID_31',
  'experience/d-square-vfx-internship': 'YOUR_GOOGLE_DRIVE_FILE_ID_32',
  'experience/freelance-videoediting': 'YOUR_GOOGLE_DRIVE_FILE_ID_33',
  'experience/udemy-course': 'YOUR_GOOGLE_DRIVE_FILE_ID_34',
  'experience/wafx-competition': 'YOUR_GOOGLE_DRIVE_FILE_ID_35',
  
  // Show Reels videos
  'show-reels/composition-reel': 'YOUR_GOOGLE_DRIVE_FILE_ID_36',
  'show-reels/fx-reel': 'YOUR_GOOGLE_DRIVE_FILE_ID_37',
  'show-reels/screen-replacement': 'YOUR_GOOGLE_DRIVE_FILE_ID_38',
};

const DetailPage = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  
  // Create the key for videoMap lookup
  const videoKey = `${category}/${slug}`;
  const fileId = videoMap[videoKey];

  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <p className="text-sm text-primary">{toTitleCase(category || '')}</p>
          <CardTitle className="text-3xl font-bold">{toTitleCase(slug || '')}</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-gray rounded-lg flex items-center justify-center aspect-video">
            {fileId ? (
              <iframe
                src={`https://drive.google.com/file/d/${fileId}/preview`}
                className="w-full h-full rounded-lg"
                allow="autoplay"
                title={`${toTitleCase(slug || '')} Video`}
              />
            ) : (
              <div className="text-center text-muted-foreground p-8">
                <p>Video not available.</p>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Description</h3>
            <p className="text-muted-foreground">
              This is a placeholder description for the "{toTitleCase(slug || '')}" content. 
              More details about this project will be added here soon. This section will describe the techniques used, the scope of the project, and any other relevant information.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailPage;
