-- Create session_bookings table for mentoring sessions
CREATE TABLE public.session_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  session_type TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  experience_level TEXT NOT NULL,
  goals TEXT NOT NULL,
  additional_notes TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.session_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for session bookings
CREATE POLICY "Admins can view all session bookings" 
ON public.session_bookings 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update session bookings" 
ON public.session_bookings 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can create session bookings" 
ON public.session_bookings 
FOR INSERT 
WITH CHECK (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_session_bookings_updated_at
BEFORE UPDATE ON public.session_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();