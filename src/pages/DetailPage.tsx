
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toTitleCase } from '@/lib/utils';

const DetailPage = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();

  return (
    <div className="container mx-auto py-12 px-4">
      <Card>
        <CardHeader>
          <p className="text-sm text-primary">{toTitleCase(category || '')}</p>
          <CardTitle className="text-3xl font-bold">{toTitleCase(slug || '')}</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-gray rounded-lg flex items-center justify-center aspect-video">
            <video
              className="w-full h-auto rounded-lg"
              controls
            >
              <source src="" type="video/mp4" />
              Your browser does not support the video tag. This is a placeholder for your video content.
            </video>
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
