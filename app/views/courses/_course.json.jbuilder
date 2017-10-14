json.extract! course, :id, :course_id, :string, :description, :created_at, :updated_at
json.url course_url(course, format: :json)
