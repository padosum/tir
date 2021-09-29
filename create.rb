require 'erb'
require 'date'

class Info
  attr_accessor :title, :today

  def template_binding
    binding
  end
end

category = ARGV[0]
filename = ARGV[1]
new_file = File.open("./public/post_store/docs/#{category}/#{filename}.md", "w+")
template = File.read("./template.erb")
# rand_emoji = rand(('1F300'.hex)..('1F531'.hex)).chr('UTF-8');
frontmatter = Info.new
frontmatter.title = ARGV[2]
frontmatter.today = Date.today
new_file << ERB.new(template).result(frontmatter.template_binding)
new_file.close